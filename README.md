# dotnet-react-contextapi
This is an alternate template for starting dotnet core + react applications that use ContextAPI instead of redux for app level state management. 

The sample app is the same as "dotnet new react" with the exception of state being moved into AppProvider instead of using local component state. 

Steps used to update this template from default created by "dotnet new react" were:

1. Updated the package.json to react 16.7 (for ContextAPI support)
2. Created AppProvider.js component to hold the centralized state for the demo app.  Wrapped base BrowerRouter in index.js with AppProvider to inject state. 
3. Added currentCounter variable, incrementCounter method, and decrementCounter method to AppProvider component state. 
4. Modified Counter.js component to use AppProvider counter state variable and methods in place of local state. 
5. Added forecasts variable and loadForecast method to AppProvider component state. 
6. Modified FetchData.js component to use AppProvider forecasts data and loadForecast method, added a refresh button, and changed to load data only if empty by default. 

Current the context is injected at the top level and passed down via property drilling to the other components.  Future updates will likely clean this up to only push down necessary parts of state to subcomponents. 


