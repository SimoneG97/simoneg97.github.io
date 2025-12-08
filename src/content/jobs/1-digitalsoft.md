---
company: 'DigitalSoft S.r.l.'
from: '2022-02'
to: '2024-06'
role: 'Operative Research / IIOT Backend Developer'
where: 'Pescara, Abruzzo, Italy'
languages: ['Python3', 'ECMAScript', 'Rust', 'C#']
platforms: ['Azure Pipelines']
dbms: ['SQL Server', 'SQLite']
frameworks_and_libraries: ['Flask', 'FastAPI', 'Google OR-Tools']
other_technologies: ['Linux', 'Shell', 'Docker', 'OPC-UA']
---

# <div class="text-3xl font-mono font-bold mb-8 divider divider-start">Summary</div>
My role at DigitalSoft began as an OR Python Developer and was heavily influenced by my studies and thesis.

Since this was my first job, I tried to learn as much as I could.

Let's begin!

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Production plan optimizer (with Google OR-Tools)</div>
The first problem I was tasked to solve was to create a production planning optimization algorithm generic enough that
could be useful to all customers, but also with enough specialization that its result was non-trivial.

Definitely a colorful start!

I chose to approach this problem by modeling it as a Mixed Integer Linear Program (MILP) with a library of the most common constraints asked by customers that could also be in part customized.

It was a backend Python application which exposed APIs to each optimizers and required the data to fill the models with.
I first started with Flask but after searching a bit more I settled with FastAPI which helped on some features I needed (some of which were strongly related to API documentation with OpenAPI).

More on this can be read by check my <a class="link" target="_blank" rel="noopener noreferrer" href="https://tesionline.univaq.it/handle/20.500.12319/8642">thesis</a> because the development took months and it would be too long to write here.
(Italian only for now, sorry!)

Wait, I've talked about optimizer**s**?
Yes, because...

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Production execution optimizer (also with Google OR-Tools)</div>
Together with this, I also worked on a production execution Gantt optimizer using Constraint Programming (CP) with Block Zone constraints.

I do not have a thesis on this one but much can be found by searching the Flexible Job Shop Problem.

But to have an idea of an "easier" subproblem, check out the <a class="link" target="_blank" rel="noopener noreferrer" href="https://developers.google.com/optimization/scheduling/job_shop">Job Shop Problem example</a>

The Block Zone constraint was a requirement where a user could setup some time duration in which any kind of production must not happen (imagine like a production line maintenance).

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">IIoT integration and custom connector (with Thingsboard)</div>
After a while, I worked as the main developer and maintainer of the Python IIoT integration of the main product with production lines PLCs, the majority of them communicating with OPC-UA.

Most of the integration was done thanks to <a class="link" target="_blank" rel="noopener noreferrer" href="https://thingsboard.io/">Thingsboard</a> which allowed to store and process data (with ECMAScript).

My task was to work with customers to check what significative data they wanted to monitor from IIoT devices.

Soon we found some problems with specific devices which required me to develop a custom OPC-UA connector (in Python).

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Smaller developments and honorable mentions</div>
#️⃣ Sporadic main project C# bugfixing

🐍 Python CLI tool used to compare MSSQL databases schemas to check for anomalies / customizations when the standardization of the product was in progress.<br>

🦀 Rust CLI tool that calls multiple APIs to create a list of IIoT devices and its respective monitored variables and export it as a CSV.<br>

🦀 Rust Server for testing purposes which had 2 endpoints, the first one that worked as an "echo" by returning the body that was sent (with the same mimetype) and the second one which simulated a 500 Internal Server Error.
This last tool was Dockerized in an extreme way to see how small could a Docker image be (the result was 2MB).