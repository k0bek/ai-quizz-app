
import React from 'react';
import "@/app/globals.css";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row">
        
          <aside className="w-full md:w-64 bg-white p-4 md:relative md:top-0 md:left-0">
            <a href="/dashboard" className="text-xl  mb-4">Dashboard</a>
            
            <nav className="space-y-2">
              <a href="/questions_on_answers" className="block p-2 rounded-lg hover:bg-gray-300">
                -Quizz details
              </a>
             
            </nav>
          </aside>
        
          <main className="flex-1 p-4">
            {children}
          </main>
          
          
        </div>
      </Container>
    </>
  );
}
