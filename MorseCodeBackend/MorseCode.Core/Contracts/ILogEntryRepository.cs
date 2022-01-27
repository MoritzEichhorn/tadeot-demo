using MorseCode.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MorseCode.Core.Contracts
{
    public interface ILogEntryRepository: IGenericRepository<LogEntry>
    {
    }
}
