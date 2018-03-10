# Concurrency sandbox

How to use a shared PostgreSQL database to coordinate a service that sometimes run multiple instances, allowing that service to be deployed with zero downtime using rolling updates across a set of servers.

Showcases these libraries:
* advisory-lock
* pg-boss

## Get started

Install PostgreSQL, at least version 9.6

Create a local database: 

    create database sandbox;

## Singleton

Run multiple service instances in different terminal windows:

    node singleton

Stopping a service will cause another service to take over

## Queue

Run multiple consumer service instances in different terminal windows:

    node consumer

Repeatably produce a work item and have a single consumer process it. Note: multiple work items may be processed concurrently. Processing can be serialized using serializable transaction isolation level.

    node produce
