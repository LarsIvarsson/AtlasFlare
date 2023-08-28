using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AtlasFlare.Migrations
{
    /// <inheritdoc />
    public partial class Seeddatauser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "UserId", "Password", "Username" },
                values: new object[] { 1, "password", "user" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Students",
                keyColumn: "UserId",
                keyValue: 1);
        }
    }
}
