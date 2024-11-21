using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyPortfolioApi.Domain;
using MyPortfolioApi.Models;

namespace MyPortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EducationController : ControllerBase
    {
        private PortfolioContext _context;
        public EducationController(PortfolioContext context)
        {
            _context = context;            
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ApiResponseModel<List<EducationViewModel>>> GetAllEducationDetails()
        {
            var educationalDetails = await _context.Education.ToListAsync();

            EducationViewModel educationViewModel = new EducationViewModel();

            List<EducationViewModel> educationViewModelList = new List<EducationViewModel>();

            foreach (var education in educationalDetails)
            {
                educationViewModel = new EducationViewModel
                {
                    Id = education.Id,
                    Branch = education.Branch,
                    EducationType = education.EducationType,
                    PassOutYear = education.PassOutYear,
                    University = education.University
                };
                educationViewModelList.Add(educationViewModel);
            }

            return new ApiResponseModel<List<EducationViewModel>>
            {
                Message = "Education details fetched successfully",
                IsSuccess = true,
                StatusCode = StatusCodes.Status200OK,
                Result = educationViewModelList
            };
        }
    }
}
