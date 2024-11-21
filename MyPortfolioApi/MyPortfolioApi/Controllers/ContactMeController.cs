using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyPortfolioApi.Domain;
using MyPortfolioApi.Models;

namespace MyPortfolioApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactMeController : ControllerBase
    {
        private readonly PortfolioContext _context;
        public ContactMeController(PortfolioContext context)
        {
            _context = context;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ApiResponseModel<ContactMeViewModel>> CreateUserContactMe([FromBody] ContactMeViewModel contactMeViewModel) 
        {
            if(contactMeViewModel == null)
            {
                return new ApiResponseModel<ContactMeViewModel>
                {
                    Message = "Invalid request",
                    IsSuccess = false,
                    StatusCode = StatusCodes.Status400BadRequest,
                    Result = null
                };
            }  

            var getContactDetails = await _context.ContactMe.FirstOrDefaultAsync(x => x.Email.ToLower() == contactMeViewModel.Email.ToLower());

            if (getContactDetails != null)
            {
                return new ApiResponseModel<ContactMeViewModel>
                {
                    Message = "Data Already Exists !!!",
                    IsSuccess = false,
                    StatusCode = StatusCodes.Status400BadRequest,
                    Result = null
                };
            }

            var contactMeDbModel = new ContactMeDbModel
            {
                Name = contactMeViewModel.Name,
                Email = contactMeViewModel.Email,
                Message = contactMeViewModel.Message,
                CreatedOn = DateTime.Now,
                CreatedBy = contactMeViewModel.Email
            };

            _context.ContactMe.Add(contactMeDbModel);
            _context.SaveChanges();

            return new ApiResponseModel<ContactMeViewModel>
            {
                Message = "Contact details saved successfully",
                IsSuccess = true,
                StatusCode = StatusCodes.Status200OK,
                Result = contactMeViewModel
            };
        }
    }
}
