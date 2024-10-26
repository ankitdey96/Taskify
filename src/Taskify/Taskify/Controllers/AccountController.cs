using Autofac;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Taskify.DTOs;
using Taskify.Infrastructure.Identity;
using Taskify.Infrastructure.Token;

namespace Taskify.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILifetimeScope _scope;
        private readonly ILogger<AccountController>_logger;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITokenService _tokenService;

        public AccountController(ILogger<AccountController> logger,ILifetimeScope lifetimeScope, UserManager<ApplicationUser> userManager,
         ITokenService tokenService, IConfiguration configuration)
        {
            _logger = logger;
            _scope = lifetimeScope;
            _userManager = userManager;
            _tokenService = tokenService;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]RegisterDto oRegisterDto)
        {
            if (ModelState.IsValid)
            {
                oRegisterDto.Resolve(_scope);
                var response = await oRegisterDto.RegisterAsync(Url.Content("~/"));

                if (response.errors is not null)
                {
                    foreach (var error in response.errors)
                    {
                        ModelState.AddModelError(string.Empty, error.Description);
                    }
                }
                else
                    return Ok(new AuthResponseDto
                    {
                        IsSuccess = true,
                        Error = string.Empty
                    });
            }

            return BadRequest(ModelState);
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponseDto>>Login([FromBody]LoginDto oLoginDto)
        {
            if (ModelState.IsValid)
            {
                oLoginDto.Resolve(_scope);
                var oResult = await oLoginDto.LogIn();
                if (oResult.ErrorMessage is not null)
                {
                    ModelState.AddModelError(string.Empty, oResult.ErrorMessage);
                }
                else
                {
                    var user = await _userManager.FindByEmailAsync(oLoginDto.Email);
                    var claims = (await _userManager.GetClaimsAsync(user)).ToArray();
                    var token = await _tokenService.GetJwtToken(claims,
                            _configuration["Jwt:Key"],
                            _configuration["Jwt:Issuer"],
                            _configuration["Jwt:Audience"]
                        );

                    return Ok(new AuthResponseDto
                    {
                        IsSuccess = true,
                        Token = token,
                        Error = string.Empty
                    });

                }
            }

            return BadRequest(ModelState);
        }
    }
}
