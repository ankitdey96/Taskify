using Autofac;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using Taskify.Infrastructure.Identity;

namespace Taskify.DTOs
{
    public class LoginDto
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} and at max {1} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

        public string? ReturnUrl { get; set; }
        private SignInManager<ApplicationUser> _signInManager;
        private UserManager<ApplicationUser> _userManager;
        private ILifetimeScope _scope;

        public LoginDto()
        {

        }

        public LoginDto(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        public void Resolve(ILifetimeScope scope)
        {
            _scope = scope;
            _userManager = _scope.Resolve<UserManager<ApplicationUser>>();
            _signInManager = _scope.Resolve<SignInManager<ApplicationUser>>();
        }

        public async Task<(string? ErrorMessage, string? RoleName)> LogIn()
        {
            var user = await _userManager.FindByEmailAsync(Email);
            if(user is null)
            {
                return ("User Not Found", string.Empty);
            }
            var oResult = await _signInManager.PasswordSignInAsync(Email, Password, RememberMe, false);
            if (oResult.Succeeded)
            {
                return (null, string.Empty);
            }
            else
            {
                return ("Invalid Login Attempt", null);
            }
        }

    }
}
