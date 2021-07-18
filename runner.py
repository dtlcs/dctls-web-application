import subprocess

process = subprocess.Popen(['python', 'program.py'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
out, err = process.communicate()

print(out)
