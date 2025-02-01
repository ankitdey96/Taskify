using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Taskify.Domain.Entity;
using Taskify.Infrastructure.Identity;

namespace Taskify.Infrastructure.DBContext
{
    public class ApplicationDbContext:IdentityDbContext<ApplicationUser,ApplicationRole,Guid>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContextOptions):base(dbContextOptions){

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<WorkSpace>().HasOne(x => x.Owner).WithMany(x => x.WorkSpaces).HasForeignKey(x => x.OwnerID).OnDelete(DeleteBehavior.NoAction);
            builder.Entity<WorkSpaceMembers>().HasKey(wm => new { wm.WorkspaceID, wm.UserID });
            builder.Entity<WorkSpaceMembers>()
                .HasOne(wm => wm.WorkSpace)
                .WithMany(w => w.Members)
                .HasForeignKey(wm => wm.WorkspaceID)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<WorkSpaceMembers>()
                .HasOne(wm => wm.User)
                .WithMany(u => u.WorkSpaceMembers)
                .HasForeignKey(wm => wm.UserID)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);
        }
        public DbSet<WorkSpace> WorkSpace {  get; set; }
        public DbSet<WorkSpaceMembers> WorkSpaceMembers { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
