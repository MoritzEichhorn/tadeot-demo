using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using Microsoft.Extensions.Logging;
using MorseCode.Core.Entities;

namespace MorseCode.Persistence
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<LogEntry> LogEntries { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Environment.CurrentDirectory)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            var configuration = builder.Build();
            Debug.Write(configuration.ToString());
            string connectionString = configuration["ConnectionStrings:DefaultConnection"];
            optionsBuilder
                //.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddSerilog(dispose: true)))
                .UseSqlServer(connectionString);
        }

        public ApplicationDbContext(): base(){ }
        public ApplicationDbContext(DbContextOptions options): base(options){ }

    }
}
