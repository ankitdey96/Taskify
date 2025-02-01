using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskify.Domain.Entity
{
    public class WorkSpace : IEntity<Guid>
    {
        public Guid Id { get ; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ShortName { get; set; }
        public DateTime CreatedAt {  get; set; }
        public DateTime UpdatedAt { get; set;}
        public Guid OwnerID { get; set; }
        public User Owner { get; set; }
        public List<WorkSpaceMembers> Members { get; set; }

    }
}
