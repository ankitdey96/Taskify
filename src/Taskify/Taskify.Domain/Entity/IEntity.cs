using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Taskify.Domain.Entity
{
    public interface IEntity<T>
    {
        T Id { get; set; }
    }
}
