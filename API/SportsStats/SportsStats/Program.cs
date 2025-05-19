using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SportsStats.Data.Contexts;
using SportsStats.Models.Constants;
using SportsStats.Repositories.Interfaces;
using SportsStats.Repositories.Repositories;
using System.Text;

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
                          builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                      });
});

builder.Services.AddDbContext<SportsStatsContext>(options => options.UseSqlServer("Server=.;Database=SportsStats;Integrated Security=true;TrustServerCertificate=True;"));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = Configuration.Issuer,
        ValidAudience = Configuration.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.Key))
    };
});

builder.Services
           .AddTransient<ISportsRepository, SportsRepository>()
           .AddTransient<IMetricsRepository, MetricsRepository>()
           .AddTransient<ITournamentsRepository, TournamentsRepository>()
           .AddTransient<ISportSettingsRepository, SportSettingsRepository>()
           .AddTransient<IUserRepository, UserRepository>()
           .AddTransient<IMatchRepository, MatchRepository>()
           .AddTransient<ITeamRepository, TeamRepository>();

var app = builder.Build();

app.UseCors("allow_all");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
