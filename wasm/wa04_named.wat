(module
	(func $dubsum (param $lhs i32) (param $rhs i32) (result i32)
		local.get $lhs
		local.get $rhs
		i32.add
		i32.const 2
		i32.mul
	)
	(export "dubsum" (func $dubsum))
)
