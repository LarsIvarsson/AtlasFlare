using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AtlasFlare.Migrations
{
    /// <inheritdoc />
    public partial class Seeddataadmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Teachers",
                columns: new[] { "UserId", "IsAdmin", "Password", "Username" },
                values: new object[] { 1, true, "password", "admin" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Teachers",
                keyColumn: "UserId",
                keyValue: 1);
        }
    }
}
