# Lendsqr UI Components

We are following the Atomic Design Pattern for building UI compoments in Confee. See more details here: [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
In short this means we are organising our code into the following structure:

- atoms - Smallest reusable building block of components that don't make sense to break down further. Typical examples are: Buttons, Icons, Logos, Labels, etc.
- molecules - Smaller reusable logical components that are composed of multiple atoms together. Typical examples are Menu, SearchBox, Filter Configuration, etc.
- organisms - Larger pieces of components composed of molecules and atoms. Typical examples are Header, Footer, Layout components, various page sections

The design paradigm also details mentions templates and pages. Templates are consolidated in organisms while, pages are going in the NextJS pages setion.

## Component structure

The component folder structure will follow this pattern.

```
./Component
    Component.tsx
    Component.style.ts
    Component.test.tsx
    Component.interface.d.ts
    Component.stories.tsx # Only for atoms and molecules
    index.ts
```
