using Microsoft.EntityFrameworkCore.Migrations;

namespace EasyCard.Migrations
{
    public partial class ProductUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductData",
                table: "Product",
                newName: "specifications");

            migrationBuilder.RenameColumn(
                name: "ProductCode",
                table: "Product",
                newName: "SaleCount");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Product",
                newName: "ShortTitle");

            migrationBuilder.AddColumn<bool>(
                name: "Code",
                table: "Product",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageGalery",
                table: "Product",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Lates",
                table: "Product",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "PriceFrom",
                table: "Product",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "Sale",
                table: "Product",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "ImageGalery",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Lates",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "PriceFrom",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Sale",
                table: "Product");

            migrationBuilder.RenameColumn(
                name: "specifications",
                table: "Product",
                newName: "ProductData");

            migrationBuilder.RenameColumn(
                name: "ShortTitle",
                table: "Product",
                newName: "ImagePath");

            migrationBuilder.RenameColumn(
                name: "SaleCount",
                table: "Product",
                newName: "ProductCode");
        }
    }
}
