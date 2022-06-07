import discord 
import os
from discord.ext import commands, tasks
from itertools import cycle 


client = commands.Bot(command_prefix= " . ")
status = cycle(["I'm completely open-source :)", "I'm written by Darian L."])

@client.event
async def on_ready():
    change_status.start()
    print("I'm awake!")

@tasks.loop(seconds=9)
async def change_status():
    await client.change_presence(activity=discord.Game(next(status)))

@client.command
async def load(ctx, extension):
  client.load_extension(f'cogs.{extension}')

@client.command
async def unload(ctx, extension):
  client.unload_extension(f'cogs.{extension}')

for filename in os.listdir('./cogs'):
  if filename.endswith('.py'):
    client.load_extension(f'cogs.{filename[:-3]}')

client.run("")
