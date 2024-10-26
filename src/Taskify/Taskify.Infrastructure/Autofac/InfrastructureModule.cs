using Autofac;
using Taskify.Infrastructure.Token;

namespace Taskify.Autofac
{
    public class InfrastructureModule:Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<TokenService>().As<ITokenService>().InstancePerLifetimeScope();

        }
    }
}
