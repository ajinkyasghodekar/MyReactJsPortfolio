using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyPortfolioApi.Migrations
{
    /// <inheritdoc />
    public partial class RemovedProfeciencyCol : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ProficiencyLevel",
                table: "Skills");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ProficiencyLevel",
                table: "Skills",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
