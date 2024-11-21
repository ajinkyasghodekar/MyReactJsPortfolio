namespace MyPortfolioApi.Models
{
    public class EducationDbModel
    {
        public int Id { get; set; }
        public string EducationType { get; set; }
        public string Branch { get; set; }
        public string University { get; set; }
        public int PassOutYear { get; set; }
    }
}
