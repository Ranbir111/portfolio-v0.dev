'use client'

// Note: No instances of undefined variable "L" found in this file.
// The error might be coming from an imported component or a typo in a variable name.
import { useState } from 'react'
import { Github, Linkedin, Mail, Download, ChevronRight, Code, Globe, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'

export function PortfolioComponent() {
  const [activeTab, setActiveTab] = useState("projects")

  const projects = [
    {
      title: "AI Chat Assistant",
      description: "A full-featured online chat assistant created using Next.js and Gemini AI",
      image: "/images/mygem.png?height=200&width=300",
      tags: ["Next.js", "React", "Gemini", "Tailwind CSS"],
      link: "https://mygem.vercel.app",
      github: "https://github.com/Ranbir111/gem_tut"
    },
    {
      title: "Library Management System",
      description: "A library management system built using Next.Js",
      image: "/images/lms.png?height=200&width=300",
      tags: ["Next.js", ["React"], "MongoDb", "Justand", "Tailwind CSS"],
      link: "https://lmsdivinity.vercel.app",
      github: "#"
    },
    {
      title: "IP Locator Website",
      description: "An IP Locating service use using React and A free API",
      image: "/images/iplocator.png?height=200&width=300",
      tags: ["React", "Material UI"],
      link: "https://iplocator.000.pe",
      github: "#"
    }
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
    { name: "Python", level: 40 },
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "WebSolutions Co.",
      period: "2017 - 2020",
      description: "Developed and maintained various web applications, focusing on performance optimization and user experience."
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2017",
      description: "Assisted in the development of mobile-responsive websites and contributed to the company's internal tools."
    }
  ]

  const education = [
    {
      degree: "Diploma in Computer Engineering",
      school: "Shree Durga Model Higher Sec School",
      year: "2022"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header / Hero Section */}
      <header className="bg-gradient-to-r from-purple-800 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Ranbir Kumar Gupta</h1>
          <p className="text-2xl text-gray-300 mb-6">Full Stack Developer & Tech Enthusiast</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://github.com/Ranbir111" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ranbir-kumar-gupta-4b506427b" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <Button className="bg-white text-purple-800 hover:bg-gray-200">
            Download Resume <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-gray-300 mb-4">{`
              I'm a passionate full stack developer with 2+ years of experience in building scalable web applications.
              My expertise spans across front-end and back-end technologies, with a strong focus on creating
              user-centric solutions that drive business growth.`}
            </p>
            <p className="text-gray-300">{`
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through tech blogs and community meetups.`}
            </p>
          </div>
        </section>

        {/* Tabs for Projects, Skills, Experience, Education */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-20">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <img src={project.image} alt={project.title} className="rounded-t-lg" />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 mt-2">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={project.link} target='_blank'>
                      <Button variant="outline" size="sm">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                    <Link href={project.github} target='_blank'>
                      <Button variant="outline" size="sm">
                        <Code className="mr-2 h-4 w-4" /> Source Code
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="experience">
            <div className="space-y-6 mt-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="mr-2 h-5 w-5" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="space-y-6 mt-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {edu.school} | {edu.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Ranbir Kumar Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}