using MorseCode.Core.Contracts;
using MorseCode.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MorseCode.Persistence
{
    public class LogEntryRepository : GenericRepository<LogEntry>, ILogEntryRepository
    {
        public LogEntryRepository(ApplicationDbContext dbContext):base(dbContext)
        {
        }
    }
}
