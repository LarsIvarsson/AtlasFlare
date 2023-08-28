﻿// <auto-generated />
using System;
using AtlasFlare.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AtlasFlare.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AtlasFlare.Models.QuizModel", b =>
                {
                    b.Property<int>("QuizId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QuizId"));

                    b.Property<int>("HighScore")
                        .HasColumnType("int");

                    b.Property<int?>("StudentModelUserId")
                        .HasColumnType("int");

                    b.HasKey("QuizId");

                    b.HasIndex("StudentModelUserId");

                    b.ToTable("QuizModel");
                });

            modelBuilder.Entity("AtlasFlare.Models.StudentModel", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Students");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Password = "password",
                            Username = "user"
                        });
                });

            modelBuilder.Entity("AtlasFlare.Models.TeacherModel", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Teachers");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            IsAdmin = true,
                            Password = "password",
                            Username = "admin"
                        });
                });

            modelBuilder.Entity("AtlasFlare.Models.QuizModel", b =>
                {
                    b.HasOne("AtlasFlare.Models.StudentModel", null)
                        .WithMany("HighScores")
                        .HasForeignKey("StudentModelUserId");
                });

            modelBuilder.Entity("AtlasFlare.Models.StudentModel", b =>
                {
                    b.Navigation("HighScores");
                });
#pragma warning restore 612, 618
        }
    }
}
