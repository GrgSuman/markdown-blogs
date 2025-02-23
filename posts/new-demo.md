---
id: new-demo
title: Demo blog Contents Changed
slug: new-demo
category: Python
author: SUman
isPublished: false
isFeatured: true
isUpdated: false
keywords: ''
metaDesc: ''
tags: 'nestjs, backend, ts'
updatedAt: '2025-02-16'
createdAt: '2025-02-16'
timeToRead: 2 mins
thumbnailURL: >-
  https://images.unsplash.com/photo-1537740600179-104829d410e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
categorySlug: python
---
<p>Editor’s note:&nbsp;This article was last updated by&nbsp;Ibiyemi Adewakun&nbsp;on 10 April 2024 to add information with guidelines for migrating from Express.js to Nest.js and best practices for a smooth transition.  It is crucial for developers to make an informed decision when choosing a framework for their projects. NestJS and Express.js are two of the most popular frameworks in the Node.js ecosystem for building large-scale applications. This article will compare NestJS and Express.js based on their features, architecture, community support, and more. It will explore their core components and provide insights into their ideal use cases, as well as offer guidelines for migrating from Express.js to NestJS. What is NestJS? NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript. This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project. Nest uses the Express HTTP framework by default. However, Nest is platform agnostic, meaning it can work with any Node HTTP framework. For example, it can optionally be&nbsp;configured to use Fastify, which can improve the Node framework. One of the cool things about NestJS is that anything supported in Express (i.e., Express functions) is also supported in Nest. NestJS core components Let’s go over some of the core components of NestJS. A module is a class that has been annotated with the&nbsp;@Module()&nbsp;decorator. Nest uses the metadata provided by the&nbsp;@Module()&nbsp;decorator to organize the application structure. Each NestJS application contains at least one module, known as the root module. Nest uses the root module as a starting point to resolve the structure and relationships of the application. Dynamic modules are a powerful feature of the Nest module system. This feature allows you to easily create customizable modules that can dynamically register and configure providers. Providers are very important, as Nest relies heavily on them to create relationships between different objects. A provider can be injected as a dependency. Classes like services, repositories, and helpers can be treated as providers; simply adding the&nbsp;@Injectable()&nbsp;decorator from Nest will handle the resolution, making dependency management extremely simple. When an HTTP request is received, the routing mechanism routes it to the correct controller within NestJS. Controllers handle incoming requests and respond to the application’s client side. How to install NestJS Nest includes an excellent CLI that makes it simple to scaffold a Nest application. </p><hr><p> Over 200k developers use LogRocket to create better digital experiences Learn more → </p><hr><p> In your terminal or command prompt, type the following: npm i -g @nestjs/cli</p><br><p>Let’s use the&nbsp;cd&nbsp;command to change into the directory where we want to build our app. Run the following commands: nest new nest-blog-api
cd nest-blog-api
npm run start:dev</p><br><p>Go to http://localhost:3000 in any browser. You should see a “Hello World” message. Features of NestJS Working with Node and Express is great for building a small, lightweight app where the code is easy to read. However, as things start to get complex and you add more features to your application, your code will start to get a little messier and harder to manage. This is where NestJS comes in. Nest can organize your application into self-contained modules, each with its own responsibility. A module can contain related controllers and services and keep them fairly isolated from the rest of your application. Nest also supports dependency injection. Using dependency injection means you don’t need to have a hard dependency on things like components, services, and middleware within your code. Exception filters are another cool Nest feature. All applications encounter exceptions from time to time. How you handle exceptions is important, and conveniently, Nest sorts all of that out for you. Nest includes an exceptions layer that is responsible for handling all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which sends an appropriate user-friendly response automatically. You also get easy MongoDB support with Nest. A lot of web apps built with Node use&nbsp;the MEAN stack, which consists of MongoDB, Express, Angular, and Node. One of the most popular libraries for accessing the Mongo database is Mongoose. You can easily connect to the MongoDB database and use it to build scalable applications using the&nbsp;NestJS Mongoose package. Finally, as we already mentioned, NestJS uses the Express framework by default as the request processing pipeline. This means if you are already familiar with Express processing, you’ll be able to adapt your Express middleware to use within Nest. How NestJS uses Express NestJS can be configured to use either Express or Fastify as its HTTP server framework and by default uses Express. The primary job of Express (or the chosen HTTP server) in NestJS is to proxy middleware configured for routes and map the handlers of HTTP requests to the server.  While choosing between either Express or Fastify as the HTTP server configured in your NestJS project has little impact — aside from a few additional lines of code for Fastify — Express is a great option because of its community support and access to several libraries, especially middleware and plugins built to work with Express. What is Express.js? Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes. You can use Express with Node to create single-page, multi-page, or hybrid web applications. It supports the&nbsp;MVC architectural pattern for designing web applications: Model, View, and Controller. How to install Express.js To use Express for our project, we first have to install it: npm install express</p><br><p>Then we want to import Express inside our project: import express from'express';</p><br><p>Next, we need to initialize our app, give it a port to listen to, and respond to a request on that path: const app = express();

app.get('/',(req, res)=&gt;{
  res.send('Hello World!');});

app.listen(3000,()=&gt;
  console.log('Example app listening on port 3000!'),);</p><br><p>Features of Express.js Middleware is a program component that has access to a database, client requests, and other middleware. It is primarily responsible for the systematic organization of various Express.js functions. When it comes to routing, Express includes a sophisticated routing mechanism that uses URLs to preserve the state of the webpage. Finally, Express includes template engines that enable developers to create dynamic content for webpages by creating HTML templates on the server side. NestJS vs. Express.js In this section, we will directly compare various aspects of Nest and Express, including example use cases for each. Opinionated and un-opinionated Nest is a framework with strong opinions. It adheres to the&nbsp;design paradigm of “convention over configuration,”&nbsp;which allows developers to use standard tools and code in a specific manner, thus reducing the need for explicit configuration. In addition, NestJS is&nbsp;Angular-based, so TypeScript is its primary programming language, although you can also use JavaScript. The use of TypeScript ensures that the application is reliable and bug-free. Express.js is a framework without strong opinions — in other words, un-opinionated. This means it doesn’t have a set of pre-defined rules to follow. Developers often use this opportunity to experiment with different scenarios and write code as needed. Popularity When it comes to which framework is the most popular, Nest takes home the title. With over&nbsp;64,000 stars on GitHub, Nest is the most popular framework. Express follows closely behind. It has over&nbsp;63,000 stars on GitHub, ranking second among the&nbsp;top Node.js frameworks by GitHub stars. Perfomance Express can execute multiple operations independently of each other using asynchronous programming. Nest employs the Express framework by default. However, Nest also provides an alternative way to change the underlying framework from Express to Fastify for significantly improved performance. Architecture Nest offers a ready-to-use application architecture using controllers, providers, and modules. This enables developers and teams to create applications that are simple to test and maintain. Express does not require a specific structure, which can provide flexibility for small or one-person development teams. However, this can become a problem as team size or app complexity grows, especially with developers working on different aspects of the app. Unit testing The Nest CLI comes with a&nbsp;Jest-based default testing environment. When a service, interceptor, or controller is created, the CLI creates a spec file. This file includes auto-generated testing bed code, eliminating the need for developers to write additional code for unit testing. In Express, unit testing necessitates the construction of distinct codes, which takes time and might slow down an application’s productivity. Use cases Some examples of what to build with NestJS include enterprise-level web applications and e-commerce applications. NestJS applications scale well, making them perfect for large, enterprise-level applications. It’s no surprise that&nbsp;leading companies like Adidas, Roche, Trilon, and others use Nest. We can also easily&nbsp;construct e-commerce websites by combining NestJS&nbsp;with a frontend framework like React, Angular, or Vue. Examples of what you can build with Express.js include fintech applications and streaming applications. Computer software or other technology used to support or facilitate banking and financial services is referred to as fintech. More and more financial institutions are creating fintech applications, and Express is the framework of choice for creating highly scalable finance applications. Real-time streaming services are complex, with multiple levels of data streams. To create such an app, you’ll need a robust framework such as Express.js that can efficiently handle asynchronous data streams. Migrating from Express.js to NestJS Let’s imagine you’ve come this far and decided you’d like to migrate your Express project to NestJS. In this section, we’ll work through some steps and examples to move your project to NestJS. Before we start writing any code, the first thing we need is to decide on a structure for our project. Nest relies fundamentally on how a project is organized (in NestJS, we organize them into modules) and the dependencies that exist between them. We need to think about this upfront, to avoid a circular dependency. Once we’ve decided how to structure our project, we can move on to writing some code! For the purpose of this section and some code examples, let’s imagine we’re migrating a cookbook API service and moving two resources to NestJS — one to create a recipe (POST) and another to return a list of recipes (GET). Find our example&nbsp;Express Cookbook API here.Creating and organizing the new Nest project First things first, let’s create our new Nest project by running this: $ nest new coobook-api</p><br><p>Next, we will set up our modules by creating our recipes module directory. For this project, we’ll have only one module:&nbsp;recipes: $ cd cookbook-api/src
$ mkdir recipes</p><br><p>Every module in NestJS has a module class annotated with a&nbsp;@Module()&nbsp;decorator where we organize our module by defining its components. Our recipe module file will be called&nbsp;recipes.module.ts&nbsp;and contain the following: // recipes.module.tsimport{Module}from'@nestjs/common';import{RecipesController}from'./recipes.controller';@Module({})exportclassRecipesModule{}</p><br><p>At this point in our migration, we haven’t created any controllers or providers yet so it’s pretty bare. Get a glimpse of our&nbsp;module with a bit more functionality here.Migrating our routes to Nest controllers Now, we can start writing some code by translating our Express routes into the NestJS controller. Here is our Express recipe route file: // recipes.tsimport{Router,Request,Response}from'express'import{GetAllRecipesFilters}from'../../db/dal/types'import* as controller from'../controllers/recipes'import{CreateRecipeDTO}from'../dto/recipe.dto'import{checkCache}from'../../lib/check-cache'const recipesRouter =Router()// listing resource
recipesRouter.get('/', checkCache,async(req:Request, res:Response)=&gt;{const filters:GetAllRecipesFilters= req.query

    const results =await controller.getAll(filters)return res.status(200).send(results)})// creating resource
recipesRouter.post('/',async(req:Request, res:Response)=&gt;{const payload:CreateRecipeDTO= req.body

    const result =await controller.create(payload)return res.status(200).send(result)})</p><br><p>In NestJS, we will create a new controller&nbsp;recipes.controller.ts&nbsp;in our&nbsp;recipes&nbsp;module to house these resources: // recipes.controller.tsimport{Body,Controller,Get,Inject,Post,Query}from'@nestjs/common';import{CreateRecipeDTO,RecipesFilterDto}from'./recipes.dto';import{RecipeEntity}from'./recipe.entity';import{RecipesService}from'./recipes.service';@Controller('recipes')exportclassRecipesController{constructor(@Inject(RecipesService)private recipesService:RecipesService){}@Get()
  getAll(@Query() filters:RecipesFilterDto):Promise<recipeentity[]>{returnthis.recipesService.findAll(filters);}@Post()
  create(@Body() payload:CreateRecipeDTO):Promise<recipeentity>{returnthis.recipesService.create(payload);}}<br>Above we defined our supported GET and POST resources using Nest’s decorators to specify the function handling each resource. We also defined an object interface for the filters of our listing resource in our DTO file&nbsp;recipes.dto.ts&nbsp;using the&nbsp;@Query()&nbsp;decorator, as well as a DTO type for the created payload using the&nbsp;@Body()&nbsp;decorator. To keep things clean, we will keep our resource-executing logic out of the controller and in a dedicated service file&nbsp;recipes.service.ts, but for the sake of brevity, we won’t explore the contents of the service file. You can find the&nbsp;contents of the&nbsp;recipes.service.ts&nbsp;file here. DTO stands for data transfer object. In our DTO file, we define what data points we require and support from our API’s users. This is good practice to separate the API resource contract from internal logic.Migrating our middleware Now that we have a controller, and our resource’s logic in the services, the next important part of our Express project is to migrate the middleware (where you have any). Our Express API used a middleware named&nbsp;checkCache, which checked for and returned cached listing results if available, instead of re-querying our database. In this step of our migration, we will create this middleware in our NestJS API. Because our&nbsp;checkCache&nbsp;middleware will likely be applied to every&nbsp;GET&nbsp;resource, we won’t implement it within the recipes module. Instead, we will place it in a new directory named&nbsp;common, where we will store our API’s shared utility code: $ mkdir common
$ cd common
$ mkdir middleware<br>Now we create the&nbsp;check-cache.middleware.ts&nbsp;file: // check-cache.middleware.tsimport{Injectable,NestMiddleware}from'@nestjs/common';import{Request,Response,NextFunction}from'express';importLocalCachefrom'../local-cache';@Injectable()exportclassCheckCacheMiddlewareimplementsNestMiddleware{
  use(req:Request, res:Response, next:NextFunction){try{const{ baseUrl, method }= req;const[,,, cacheKey]= baseUrl.split('/');if(method ==='GET'&amp;&amp;LocalCache.hasKey(cacheKey)){const data =LocalCache.get(cacheKey);return res.status(200).send(data);}
      next();}catch(err){throw err;}}}<br>Now we can register this&nbsp;check-cache&nbsp;middleware and apply it to the relevant resources in our AppModule class&nbsp;app.module.ts: // app.module.tsimport{Module,NestModule,MiddlewareConsumer,RequestMethod,}from'@nestjs/common';import{AppController}from'./app.controller';import{AppService}from'./app.service';import{RecipesModule}from'./recipes/recipes.module';import{CheckCacheMiddleware}from'./common/middleware/check-cache.middleware';@Module({
  imports:[RecipesModule],
  controllers:[AppController],
  providers:[AppService],})exportclassAppModuleimplementsNestModule{
  configure(consumer:MiddlewareConsumer){
    consumer
      .apply(CheckCacheMiddleware).forRoutes({ path:'recipes', method:RequestMethod.GET });}}<br>In the&nbsp;app.module.ts&nbsp;code above, we applied the&nbsp;check-cache&nbsp;middleware to the recipe’s GET resources using the&nbsp;forRoutes&nbsp;option. The above steps cover the major parts of migrating an Express app to NestJS if you decide to make the switch! Conclusion According to some developers, you are ahead of the game if you are already using NestJS. This framework gives you a significant advantage early on and also helps you&nbsp;take your Node backend to the next level&nbsp;by properly structuring your app. However, Express.js is one of the best and most popular backend development frameworks using JavaScript, and will likely remain so for some time. Which option do you prefer? Share your thoughts in the comment section! 200s only&nbsp;&nbsp;Monitor failed and slow network requests in production Deploying a Node-based web app or website is the easy part. Making sure your Node instance continues to serve resources to your app is where things get tougher. If you’re interested in ensuring requests to the backend or third-party services are successful,&nbsp;try LogRocket. LogRocket&nbsp;is like a DVR for web and mobile apps, recording literally everything that happens while a user interacts with your app. Instead of guessing why problems happen, you can aggregate and report on problematic network requests to quickly understand the root cause. LogRocket instruments your app to record baseline performance timings such as page load time, time to first byte, slow network requests, and also logs Redux, NgRx, and Vuex actions/state.&nbsp;Start monitoring for free.</recipeentity></recipeentity[]></p>



'use client'
import { useFetchRepoData } from '@/app/queryClient/customHook';
import React, { useEffect, useState } from 'react'
import PostList from '../layouts/PostList';
import { reverseSlugify, slugify } from '@/lib/slugify';
import CategorySelect from '../layouts/CategorySelect';
import { Button } from '../ui/button';
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Link from 'next/link';
import { PlusIcon, RefreshCw, Settings } from 'lucide-react';
import { deleteProject, getSingleProject, updateLocalStorage } from '@/lib/projects';
import { notFound } from 'next/navigation';

const ProjectClient = ({slug}: {slug: string}) => {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [projectSettings, setProjectSettings] = useState({
    name: "",
    repoName: "",
    owner: "",
    folderName: "",
    token: "",
  });

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectSettings({ ...projectSettings, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    // Implement update logic here
    if (
      !projectSettings.name ||
      !projectSettings.owner ||
      !projectSettings.repoName ||
      !projectSettings.folderName ||
      !projectSettings.token
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    const updatedData = {
      ...projectSettings,
      slug: slugify(projectSettings.name),
    };

    updateLocalStorage(slug, updatedData);
  };

  const handleDelete = (slug: string) => {
    // Implement delete logic here
    deleteProject(slug);
  };

    useEffect(() => {
    const data = getSingleProject(slug);
    if (data) {
      let { name, repoName, owner, folderName, token } = data;
      setProjectSettings({ name, repoName, owner, folderName, token });
    } else {
      // notFound();
    }
  }, []);

  const { posts, isLoading, error, refetch } = useFetchRepoData("markdown-blogs", "GrgSuman", "posts");

  const handleRefetch = async () => {
    try {
      await refetch();  // Trigger a refetch of the files list
    } catch (error) {
      console.error("Error refetching data:", error);
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  
  return (
        <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {reverseSlugify(slug)}
      </h1>
      <div className="flex justify-between items-center mb-4">
        <CategorySelect categories={["all", "category1", "category2"]} />
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/blog-admin/new">
              <PlusIcon className="mr-2 h-4 w-4" /> Create New Post
            </Link>
          </Button>

          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger asChild>
              <Button>
                <Settings className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent
              aria-describedby={undefined}
              className="sm:max-w-[425px]"
            >
              <DialogHeader>
                <DialogTitle>Project Settings</DialogTitle>
              </DialogHeader>
              
              <form className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    autoFocus
                    id="name"
                    name="name"
                    value={projectSettings.name}
                    onChange={handleSettingsChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="repoName" className="text-right">
                    Repo Name
                  </Label>
                  <Input
                    id="repoName"
                    name="repoName"
                    value={projectSettings.repoName}
                    onChange={handleSettingsChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="owner" className="text-right">
                    Owner
                  </Label>
                  <Input
                    id="owner"
                    name="owner"
                    value={projectSettings.owner}
                    onChange={handleSettingsChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="folderName" className="text-right">
                    Folder Name
                  </Label>
                  <Input
                    id="folderName"
                    name="folderName"
                    value={projectSettings.folderName}
                    onChange={handleSettingsChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="token" className="text-right">
                    Token
                  </Label>
                  <Input
                    id="token"
                    name="token"
                    type="password"
                    value={projectSettings.token}
                    onChange={handleSettingsChange}
                    className="col-span-3"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleDelete(slug)}
                  >
                    Delete Project
                  </Button>
                  <Button type="button" onClick={handleUpdate}>
                    Update Settings
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Button onClick={handleRefetch}>
                <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-[300px]">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default ProjectClient