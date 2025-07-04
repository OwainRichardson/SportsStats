using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportsStats.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateTournamentSetting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "TournamentSettings");

            migrationBuilder.RenameColumn(
                name: "SportId",
                table: "TournamentSettings",
                newName: "SportSettingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SportSettingId",
                table: "TournamentSettings",
                newName: "SportId");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "TournamentSettings",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
