﻿using Autofac;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using Taskify.Infrastructure.Identity;

namespace Taskify.DTOs
{
    public class RegisterDto
    {
        private ILifetimeScope _scope;
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        public string? ReturnUrl { get; set; }

        public RegisterDto()
        {

        }

        public RegisterDto(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {

        }

        public void Resolve(ILifetimeScope scope)
        {
            _scope = scope;
            _userManager = _scope.Resolve<UserManager<ApplicationUser>>();
            _signInManager = _scope.Resolve<SignInManager<ApplicationUser>>();
        }

        public async Task<(IEnumerable<IdentityError>? errors, string? RedirectLocation)> RegisterAsync(string RedirectLocation)
        {
            var oUser = new ApplicationUser
            {
                UserName = Email,
                FirstName = FirstName,
                LastName = LastName,
                Email = Email
            };
            var oResult = await _userManager.CreateAsync(oUser, Password);
            if (oResult.Succeeded)
            {
                var oNewUser = _userManager.Users.Where(x => x.Email == Email).FirstOrDefault();
               
                await _signInManager.SignInAsync(oUser, false);
                return (null, RedirectLocation);
            }
            else
            {
                return (oResult.Errors, null);
            }
        }
    }
}
