using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Repositories.Interfaces;
using SportsStats.Repositories.Repositories;
using SportsStats.Services.Interfaces;
using SportsStats.Services.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "allow_all",
                      builder =>
                      {
                          builder.AllowAnyOrigin().AllowAnyMethod();
                      });
});

builder.Services.AddDbContext<SportsStatsContext>(options => options.UseSqlServer("Server=.;Database=SportsStats;User Id=sa;Password=Megame29!;TrustServerCertificate=True;"));

builder.Services
           .AddTransient<ISportsRepository, SportsRepository>()
           .AddTransient<IMetricsRepository, MetricsRepository>()
           .AddTransient<ITournamentsRepository, TournamentsRepository>();

builder.Services
            .AddTransient<ISportsService, SportsService>()
            .AddTransient<IMetricsService, MetricsService>()
            .AddTransient<ITournamentsService, TournamentsService>();

var app = builder.Build();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
