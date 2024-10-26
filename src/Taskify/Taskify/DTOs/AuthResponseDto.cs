namespace Taskify.DTOs
{
    public class AuthResponseDto
    {
        public string Token {  get; set; }

        public bool IsSuccess {  get; set; }

        public string Error { get; set; }
    }
}
