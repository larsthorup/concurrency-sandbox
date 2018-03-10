# Concurrency sandbox

## Get started

Install PostgreSQL, at least version 9.6

Create a local database: 

    create database sandbox;

## Singleton service

Run multiple service instances in different terminal windows:

    node singleton

Stopping a service will cause another service to take over