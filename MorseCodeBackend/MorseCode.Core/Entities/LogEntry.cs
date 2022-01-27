using System;

namespace MorseCode.Core.Entities
{
    public class LogEntry : EntityObject
    {
        public string Alpha { get; set; }
        public string MorseCode { get; set; }
        public DateTime Time { get; set; }
        public State State { get; set; }
    }

    public enum State
    {
        SENT, RECEIVED
    }
}
