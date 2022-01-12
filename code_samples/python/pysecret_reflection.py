class Foo:
	def __init__(self):
		self.message = "Hello there!"

	def print_mess(self):
		print(self.message)

print("Standard")
f = Foo()
f.print_mess()

print("Reflected")
print(globals())
g = globals()["Foo"]()
getattr(g, "print_mess")()
