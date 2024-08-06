import React, { forwardRef, useId } from 'react'


    const InputRef = forwardRef(function InputRef({ label, type = 'text', className = '', ...props }, ref) {
        const id = useId()
        return (
            <div>
                {label && <label htmlFor={label} className={`text-base font-medium text-gray-900 ${className}`}>
                    {" "}
                    {props.placeholder} {" "}
                </label>
                }
                <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type={type}
                        id={id}
                        ref={ref}
                        {...props}
                    />
                </div>
            </div>
        )
    })
    export default InputRef


