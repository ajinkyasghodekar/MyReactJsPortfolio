using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyPortfolioApi.Domain;
using MyPortfolioApi.Models;

namespace PortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly PortfolioContext _context;
        public ProjectsController(PortfolioContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ApiResponseModel<List<ProjectsDbModel>>> GetProjects()
        {
            var projects = await _context.Projects.ToListAsync();

            return new ApiResponseModel<List<ProjectsDbModel>>
            {
                Message = "Projects fetched successfully",
                IsSuccess = true,
                StatusCode = StatusCodes.Status200OK,
                Result = projects
            };
        }
    }
}
