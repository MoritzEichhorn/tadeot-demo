using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MorseCode.Core.Entities;
using MorseCode.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MorseCode.Web.Controller
{

    [ApiController]
    [Route("api/[controller]")]
    public class LogEntryController: ControllerBase
    {
        public readonly UnitOfWork _unitOfWork;

        public LogEntryController()
        {
            _unitOfWork = new UnitOfWork();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<object>> GetAllLogEntries()
        {
            return Ok(await _unitOfWork.LogEntry.GetAsync());
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<object>> AddLogEntry(LogEntry logEntry)
        {
            await _unitOfWork.LogEntry.AddAsync(logEntry);
            await _unitOfWork.SaveChangesAsync();
            return Ok();
        }
    }
}
