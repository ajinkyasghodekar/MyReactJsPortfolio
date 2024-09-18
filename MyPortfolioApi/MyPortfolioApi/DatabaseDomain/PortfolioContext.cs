using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using MyPortfolioApi.Models;

namespace MyPortfolioApi.Domain
{
    public class PortfolioContext : DbContext
    {
        public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options)
        {
        }
        public DbSet<ProjectsDbModel> Projects { get; set; }
        public DbSet<ContactMeDbModel> ContactMe { get; set; }
    }
}
