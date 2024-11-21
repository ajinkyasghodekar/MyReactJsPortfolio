using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyPortfolioApi.Domain;
using MyPortfolioApi.Models;

namespace MyPortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        private PortfolioContext _context;

        public SkillsController(PortfolioContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ApiResponseModel<List<SkillsViewModel>>> GetAllSkillDetails()
        {
            var skillsDetails = await _context.Skills.ToListAsync();

            SkillsViewModel skillsModel = new SkillsViewModel();

            List<SkillsViewModel> skillsModelList = new List<SkillsViewModel>();

            foreach (var skill in skillsDetails)
            {
                skillsModel = new SkillsViewModel
                {
                    Id = skill.Id,
                    Name = skill.Name,
                    Category = skill.Category,
                    IconUrl = skill.IconUrl
                };
                skillsModelList.Add(skillsModel);
            }

            return new ApiResponseModel<List<SkillsViewModel>>
            {
                Message = "Skills details fetched successfully",
                IsSuccess = true,
                StatusCode = StatusCodes.Status200OK,
                Result = skillsModelList
            };
        }
    }
}