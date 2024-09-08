# Scalability Articles

[Articles](https://web.archive.org/web/20221030091841/http://www.lecloud.net/tagged/scalability/chrono)

## 1. Clones

- Public servers of scalable web applications sit behind load balancers which evenly distribute load from users onto a group/application of servers 
- Users should always get the same response for an identical request, regardless of what server they land on

**First *Golden Rule* of Scalability**

Every server contains exactly the same codebase and does not store any user related data, like sessions or profile pictures, on local disc or memory. 

This info instead needs to be stored in a centralized data store which is accessible to all application servers. This could be an external database or external, persistant cache like Redis. *External means that it does not reside on application servers* 

**Questions Raised in this Approach**

1. How does one deal with updates to their codebase and ensure that these servers are using new code when it is pushed 

## 2. Database 

- After implementing part 1 (clones), we can now scale horizontally and support thousands of concurrent users. As we keep scaling, our application will eventually break. (Your Database is struggling!!)

**Possible Solutions to this Problem**

1. Keep your Database running in the same state 
    - Don't denormalize data
    - Do master-slave replication, and vertically scale your master server 
    - After vertically scaling exhausts, you will want to shard, denormalize, and SQL tune.
    - Author argues that each successive action taken from this point only becomes more costly 

2. Denormalize data right from the beginning and include no more JOINS in any db query 
    - You can either stick with your current SQL database and treat it like a SQL database, or instead migrate to a NOSQL database, where denormaliaztion is standard. 
    - If migrating to NoSQL, then joins will have to be done in application code. 
    - Even after introducing a NoSQL Databse and letting your application to dataset-joins, soon DB requests will start to get slower and slower as you continue to scale. 
    - At some point, you will have to introduce a cache. 

## 3. Caching

- Caches are simple Key-Value stores that reside as a buffering layer between your application and your data storage. 
- Whenever your application has to read data, it should at first try to retrieve the data from the cache. If it is not in the cache, then it should try the main data source. 

**Patterns for Caching Data** 

1. Cached Database Queries 

- Anytime you perform a query on a database, you store the resulting query in a cache with a hashed version of the query as the cache key. 
- The next time you run the query, you first check to see if it is in the cache. 
- Main issue with this approach is expiration. 
    - It's hard to delete/expire a cached result of a complex query when one piece of data changes (for exmaple a single table cell) and you need to delete all cached queries who may include that table cell. 

2. Cached Objects (Preferred Method)

- Let classes assemble a dataset from your database and then store the complete instance of the class or dataset in a cache. 
- If you had a Class called product which contained data such as prices, texts, pictures, and customer reviews, then you likely have methods to query a database for all of these pieces of information. 
    - These pieces of info are hard to cache because they all relate to one another. 
- After your class has assembled all of the necessary data, directly store an array of the data or the entire instance of the class in a cache. 
    - This allows you to easily discard of the entire cached object when some piece of data in your application changes 
- This also allows for asynchronous processing, allowing worker servers to assemble objects for you, leaving your application to only use the cache and rarely touch a db.

## 4. Asyncrhonism

**Two paradigms asynchronism can be done** 

1. Async #1 
- **Relies on your knowing what kind of work you will need to do in advance**. Very similar to the idea of batch processing, where you do the time consuming work in advance and serve the finished work with low latency.
- An example would be to use this paradigm to generate dynamic content into static content, say pages of a website. 
- After these pages are generated, you could store them in a CDN and have super fast response times 

2. Async #2 
- **When you cannot reliabely estimate what work you will need to do**, you must start the task as it comes in and tell the user the job is going to take some time to complete. While the user waits or continues to browse the page, the job is put into a job queue. 
- Job queues are constantly checked by workers for new jobs. If there is a new job, the worker completes the job and after some time will send a signal that the job was done. 
- The frontend will constantly check to see if the "job is done" signal has been sent. 