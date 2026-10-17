"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FieldWrapperProps {
  id: string;
  label: string;
  required?: boolean;
  optionalText?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

export function FieldWrapper({
  id,
  label,
  required = false,
  optionalText = "(opsional)",
  hint,
  error,
  children,
  className,
}: FieldWrapperProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="mb-1.5 font-body text-label font-semibold text-ink-700"
      >
        {label}{" "}
        {required ? (
          <>
            <span className="text-danger-fg" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (wajib)</span>
          </>
        ) : (
          <span className="font-normal text-ink-500">{optionalText}</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mb-1.5 text-caption text-ink-500">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 inline-flex items-center gap-1.5 text-caption font-medium text-danger-fg"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export const inputBaseClasses =
  "h-12 w-full rounded-md border border-ink-400 bg-white px-3.5 py-3 font-body text-body text-ink-900 shadow-xs transition-colors placeholder:text-ink-500 hover:border-ink-600 focus:border-emerald-700 focus:shadow-focus focus-visible:outline-2 focus-visible:outline-emerald-500 disabled:bg-ink-100 disabled:text-ink-500 disabled:border-ink-300";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={hasError ? "true" : undefined}
        className={cn(
          inputBaseClasses,
          hasError && "border-danger-fg focus:border-danger-fg",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface PhoneInputProps extends Omit<InputProps, "type"> {}

/**
 * Input telepon/WhatsApp dengan prefix tetap +62 dan inputmode="tel" (§6.2).
 */
export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <div className="relative flex w-full items-center">
        <span
          className="inline-flex h-12 shrink-0 items-center rounded-l-md border border-r-0 border-ink-400 bg-ink-100 px-3.5 font-body text-body font-medium text-ink-700 select-none tabular"
          aria-hidden="true"
        >
          +62
        </span>
        <input
          ref={ref}
          type="tel"
          inputMode="tel"
          aria-invalid={hasError ? "true" : undefined}
          placeholder="81234567890"
          className={cn(
            inputBaseClasses,
            "rounded-l-none",
            hasError && "border-danger-fg focus:border-danger-fg",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
PhoneInput.displayName = "PhoneInput";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        aria-invalid={hasError ? "true" : undefined}
        className={cn(
          inputBaseClasses,
          "py-2.5",
          hasError && "border-danger-fg focus:border-danger-fg",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={hasError ? "true" : undefined}
        className={cn(
          inputBaseClasses,
          "min-h-30 resize-y py-3",
          hasError && "border-danger-fg focus:border-danger-fg",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
