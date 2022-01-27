using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using MorseCode.Persistence;
using Microsoft.EntityFrameworkCore;

namespace MorseCode.Web
{
    public class Program
    {
        private static string _connectionString = "Server=morse-database,1433;User Id=sa;Password=Password1!";

        public static void Main(string[] args)
        {
            var options = new DbContextOptionsBuilder()
                   .UseSqlServer(_connectionString)
                   .Options;

            using (var ctx = new ApplicationDbContext(options))
            {
               ctx.Database.Migrate();
            }
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
