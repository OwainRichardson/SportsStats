using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportsStats.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddIsCompleteToMatches : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsComplete",
                table: "Matches",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsComplete",
                table: "Matches");
        }
    }
}
