using Taskify.Domain.Common;

namespace Taskify.Domain.Entity
{
    public class WorkSpaceMembers 
    {
        public Guid WorkspaceID { get; set; }
        public WorkSpace WorkSpace { get; set; }
        public Guid UserID { get; set; }
        public User User { get; set; }
        public WorkSpaceMemberRole Role { get; set; }
        public DateTime JoinedAt { get; set; }

    }
}
