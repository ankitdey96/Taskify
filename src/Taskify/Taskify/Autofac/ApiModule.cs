using Autofac;
using Taskify.DTOs;

namespace Taskify.Autofac
{
    public class ApiModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<RegisterDto>().AsSelf();
            builder.RegisterType<LoginDto>().AsSelf();

        }
    }
}
