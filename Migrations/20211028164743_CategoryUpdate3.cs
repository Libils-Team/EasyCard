using Microsoft.EntityFrameworkCore.Migrations;

namespace EasyCard.Migrations
{
    public partial class CategoryUpdate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhotoPath",
                table: "Product",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Product",
                newName: "ImagePath");

            migrationBuilder.RenameColumn(
                name: "Cost",
                table: "Product",
                newName: "PriceOld");

            migrationBuilder.AddColumn<decimal>(
                name: "PriceCurrent",
                table: "Product",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PriceCurrent",
                table: "Product");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Product",
                newName: "PhotoPath");

            migrationBuilder.RenameColumn(
                name: "PriceOld",
                table: "Product",
                newName: "Cost");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Product",
                newName: "Name");
        }
    }
}
