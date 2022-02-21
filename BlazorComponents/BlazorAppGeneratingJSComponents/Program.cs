using BlazorAppGeneratingJSComponents;
using Grpc.Net.Client;
using Grpc.Net.Client.Web; 
using ImageComments.Grpc;
using JSComponentGeneration.Angular;
using JSComponentGeneration.React;
using Microsoft.AspNetCore.Components; 
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using System;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.RegisterForAngular<Counter>();
builder.RootComponents.RegisterForReact<Counter>();
builder.RootComponents.RegisterForReact<ImageDetails>();

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services
    .AddGrpcClient<Greeter.GreeterClient>((services, options) =>
    {
        var baseUri = services.GetRequiredService<NavigationManager>().BaseUri;
        options.Address = new Uri(baseUri);
    })
    .ConfigurePrimaryHttpMessageHandler(
        () => new GrpcWebHandler(new HttpClientHandler()));

await builder.Build().RunAsync();
