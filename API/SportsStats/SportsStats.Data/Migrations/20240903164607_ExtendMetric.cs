using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SportsStats.Data.Migrations
{
    /// <inheritdoc />
    public partial class ExtendMetric : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsScoreModifier",
                table: "Metrics",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsTurnover",
                table: "Metrics",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "ScoreModifier",
                table: "Metrics",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsScoreModifier",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "IsTurnover",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "ScoreModifier",
                table: "Metrics");
        }
    }
}
