namespace MyPortfolioApi.Models
{
    public class ApiResponseModel<T>
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } 
        public bool IsSuccess { get; set; }
        public T Result { get; set; }
    }
}
