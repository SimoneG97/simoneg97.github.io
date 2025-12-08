---
company: 'Ready2Use S.r.l.'
from: '2024-06'
to: null
role: 'Java Backend Developer'
where: 'Pescara, Abruzzo, Italy'
languages: ['Java', 'Scala 3', 'Typescript', 'Python', 'Elixir']
platforms: ['Azure Pipelines', 'GitHub Actions', 'Jenkins']
dbms: ['MySQL']
frameworks_and_libraries: ['Spring Boot']
other_technologies: ['Linux', 'Shell', 'Docker', 'ANTLR', 'Kubernetes']
---

# <div class="text-3xl font-mono font-bold mb-8 divider divider-start">Summary</div>
My role at Ready2Use as a Java Developer was definitely full of interesting projects and working for completely different stacks from my previous job.

New stacks, new problems, new skills!

It's better to see many different things at the start of the career to grow transversal skills.

Now, onto the things I've worked on!

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Workflow Java 21 monolitic-ish application (with Camunda)</div>
I've started working on a semi-monolithic application in Java 21 to manage an approval workflow to be used internally
by the customer.

There was heavy usage of Camunda 7, with its behaviour modified to account for a more robust usage, like
validating the process initialization payload based on the starting form because by default Camunda does no validation.

We also encountered some limitations related to computing values dynamically inside forms which I was tasked to find a
solution on.

A custom language (or DSL) was needed to define operations on form fields and/or constants.

My first attempt was create a recursive descent parser in Scala 3.

The reason I chose Scala was because I could write the same logic and use it both backend and frontend since I
could target both Java (since by default Scala targets the JVM) and JS thanks to ScalaJS.

But for different reasons related to the frontend implementation (with Angular), we later had to discard this option after
developing a PoC.

The second solution I proposed was defining a grammar via <a class="link" target="_blank" rel="noopener noreferrer" href="https://www.antlr.org/">ANTLR</a> and then implement the parser logic in both Java and TypeScript.

This was a sub-optimal solution since I had to write the logic both times, first in Java and then in TypeScript while also
being careful in checking that the behaviour was coherent in both implementations.

Since the result was well defined, for both parsers I used a TDD approach.

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">VDS configuration for development purposes on multiple projects & teams</div>
I was also tasked to setup a VDS to be used for development purposes.

I chose to used NGINX as a reverse proxy to allow the deployment of multiple projects (some deployed on a subpath, others with their subdomain), with my suggestion to deploy only Dockerized apps and avoid bare metal installations where possible, to both have reproducible installations and also keep the VDS clean.

I was given a FQDN to which I used <a class="link" target="_blank" rel="noopener noreferrer" href="https://certbot.eff.org/">certbot</a> and a crontab to keep the certificate updated.

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">VDS configuration for a self-hosted instance of KMS</div>
There was also another VDS where I had installed a KMS
(<a class="link" target="_blank" rel="noopener noreferrer" href="https://github.com/dani-garcia/vaultwarden">Vaultwarden</a>) to be used internally, configured with <a class="link" target="_blank" rel="noopener noreferrer" href="https://github.com/fail2ban/fail2ban">fail2ban</a> and 
other security measures and scheduled backups (same as the development server) to prevent unpleasant headaches in the future.

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Automatic code scan for any project of any stack (with Mend)</div>
This one was very interesting, a (big) customer had asked for a way to check for vulnerabilities in various projects of theirs, while also having a custom workflow which required multiple actors to allow or deny the deployment of a new version of any of their projects.

Many stacks were involved in their projects: Java, Python, PHP, JS (frontends), C# and so on.

They used Mend as a tool but also want a 3rd party to review the results and give an opinion of their own.

The problem was that we needed an environment to also **build** the projects, which is difficult enough when managing so many stacks but even worse if you consider that different projects also had different version dependencies (Java 11-17-21, Python 2-3, etc...).

My proposal was to use the previously developed Workflow application (which we carefully developed as agnostic as possible) to manage a process which could start scans while also receive the 3rd party opinion from on each vulnerability found.

To manage the various requirements of the different projects, I asked (where not already present) to create a Dockerfile which job
was to simply correctly build the project (if it makes sense) and add some metadata via labels to the whereabouts of the project files.

From this docker file I would build and image and extend it with another image I designed to scan the project with mend and output
the file report.

It had the minimum hard requirements as possible on the base image: have a particular set of labels, have glibc and curl.

When the entire process was started from the workflow, a selfhosted Jenkins pipeline would then start and manage all the builds needed to get the scan result.

Also interesting to see how Jenkins allows to create powerful pipelines thanks to Groovy.

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Health insurance microservice-ish application in Java 21/11</div>
After some time, I got moved to another project in consultancy for a project (hosted on GitHub) which managed health insurance policies with the backend written in Java 11 (majority of modules) and 21 (a small subset of modules).

This project was a very good gym to tackle a big project which had development AND organizational problems.

Trying to understand what an intricate code did or refactor already existing code to solve performance problems while also deal with parts of code you didn't even know existed completely break because you changed a (apparently) completely unrelated line of code.

I've also found out finally how useful git bisect can be to pinpoint regression problems.

### <div class="text-xl font-mono font-bold mb-4 mt-4 divider">Smaller developments and honorable mentions</div>
🐍 Stress test project with Python and Locust to check what load that could an internally developed chatbot manage.

💧 CSV parser with Elixir that could filter some specific type of rows (a personal exploration of Elixir, it was not a requirement).