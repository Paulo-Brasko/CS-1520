(module
	(func $dubsum (param $lhs i32) (param $rhs i32) (result i32)
		(i32.mul
			(i32.add
				(local.get $lhs)
				(local.get $rhs))
			(i32.const 2)))
	(export "dubsum" (func $dubsum)))
