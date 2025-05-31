"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { format } from "date-fns"
import {
  Calendar,
  MapPin,
  Clock,
  ImageIcon,
  ArrowLeft,
  UserCheck,
  Users,
  Tag,
  Sparkles,
  Zap,
  Tickets,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Form, FormControl, FormField, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"

import Confetti from '../assets/images/confetti.jpeg'

const eventSchema = z.object({
  title: z.string().min(1, "Event title is required"),
  description: z.string().optional(),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  startTime: z.string().min(1, "Start time is required"),
  endDate: z.date({
    required_error: "End date is required",
  }),
  endTime: z.string().min(1, "End time is required"),
  location: z.string().min(1, "Location is required"),
  category: z.string().min(1, "Category is required"),
  ticketPrice: z.string().min(1, "Ticket price is required"),
  capacity: z.string().min(1, "Capacity is required"),
  requireApproval: z.boolean().default(false),
})

type EventFormData = z.infer<typeof eventSchema>

export default function CreateEvent() {
  const [imagePreview, setImagePreview] = useState<string>("")

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      requireApproval: false,
    },
  })

  const onSubmit = (data: EventFormData) => {
    console.log("Event data:", data)
    alert("Event Created Successfully! 🎉")
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Enhanced Back Button */}
        <button 
            onClick={() => navigate('/')}
            className="group inline-flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-8 font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <div className="p-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
            <ArrowLeft className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-lg">Back to Events</span>
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Enhanced Event Image */}
            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Dynamic Gradient Image Area */}
                    <div className="aspect-video bg-gradient-to-br from-yellow-400 via-orange-500 via-pink-500 via-purple-500 to-blue-500 rounded-xl overflow-hidden relative group animate-gradient-x">
                      {imagePreview ? (
                        <img
                          src={imagePreview || "/placeholder.svg"}
                          alt="Event preview"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 via-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
                          <div className="relative z-10 flex flex-col items-center space-y-3">
                            <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm animate-bounce">
                              <ImageIcon className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-white/90 font-medium">Upload Event Image</p>
                          </div>
                        </div>
                      )}

                      {/* Enhanced Upload Button */}
                      <div className="absolute bottom-4 right-4">
                        <label htmlFor="image-upload" className="cursor-pointer group">
                          <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-100 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group-hover:rotate-12">
                            <ImageIcon className="w-5 h-5 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                          </div>
                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Select defaultValue="minimal">
                        <SelectTrigger className="w-36 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">✨ Minimal</SelectItem>
                          <SelectItem value="modern">🚀 Modern</SelectItem>
                          <SelectItem value="classic">🎭 Classic</SelectItem>
                          <SelectItem value="vibrant">🌈 Vibrant</SelectItem>
                        </SelectContent>
                      </Select>

                      <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-0 px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="font-semibold">Public Event</span>
                          <Sparkles className="w-3 h-3" />
                        </div>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Enhanced Event Form */}
            <div className="space-y-6">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Enhanced Event Title */}
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <div className="relative">
                            <FormControl>
                              <Input
                                placeholder="✨ Your Amazing Event Name"
                                className="text-2xl font-bold border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-gray-400 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                                {...field}
                              />
                            </FormControl>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform scale-x-0 transition-transform duration-300 focus-within:scale-x-100"></div>
                            <FormMessage />
                          </div>
                        )}
                      />

                      {/* Enhanced Date and Time */}
                      <div className="space-y-6">
                        {/* Start Date/Time */}
                        <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-300 transition-all duration-300">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-blue-700 min-w-[50px]">Start</span>
                          <div className="flex items-center space-x-3 flex-1">
                            <FormField
                              control={form.control}
                              name="startDate"
                              render={({ field }) => (
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={cn(
                                          "justify-start text-left font-medium border-2 border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300",
                                          !field.value && "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? format(field.value, "EEE, MMM dd") : <span>Pick a date</span>}
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    {/* <CalendarComponent
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                      className="p-3"
                                    /> */}
                                  </PopoverContent>
                                </Popover>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="startTime"
                              render={({ field }) => (
                                <FormControl>
                                  <Input
                                    type="time"
                                    className="w-32 border-2 border-blue-200 bg-white hover:border-blue-300 focus:border-blue-400 transition-all duration-300"
                                    {...field}
                                  />
                                </FormControl>
                              )}
                            />
                          </div>
                        </div>

                        {/* End Date/Time */}
                        <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 hover:border-orange-300 transition-all duration-300">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-orange-700 min-w-[50px]">End</span>
                          <div className="flex items-center space-x-3 flex-1">
                            <FormField
                              control={form.control}
                              name="endDate"
                              render={({ field }) => (
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        className={cn(
                                          "justify-start text-left font-medium border-2 border-orange-200 bg-white hover:bg-orange-50 hover:border-orange-300 transition-all duration-300",
                                          !field.value && "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? format(field.value, "EEE, MMM dd") : <span>Pick a date</span>}
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    {/* <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                    /> */}
                                  </PopoverContent>
                                </Popover>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="endTime"
                              render={({ field }) => (
                                <FormControl>
                                  <Input
                                    type="time"
                                    className="w-32 border-2 border-orange-200 bg-white hover:border-orange-300 focus:border-orange-400 transition-all duration-300"
                                    {...field}
                                  />
                                </FormControl>
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Location */}
                      <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-all duration-300">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormControl>
                              <Input
                                placeholder="🌍 Add Event Location"
                                className="border-0 bg-transparent p-0 focus-visible:ring-0 font-medium text-green-700 placeholder:text-green-500 flex-1"
                                {...field}
                              />
                            </FormControl>
                          )}
                        />
                      </div>

                      {/* Enhanced Description */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-300 transition-all duration-300">
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormControl>
                              <Textarea
                                placeholder="📝 Tell everyone what makes your event special..."
                                className="border-0 bg-transparent p-0 focus-visible:ring-0 resize-none font-medium text-purple-700 placeholder:text-purple-500"
                                rows={3}
                                value={field.value || ""}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                name={field.name}
                              />
                            </FormControl>
                          )}
                        />
                      </div>

                      {/* Enhanced Event Options */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-6 h-6 text-yellow-500" />
                          <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            Event Options
                          </h3>
                        </div>

                        {/* Enhanced Tickets */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <Tickets className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-green-700 text-lg">Tickets</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <FormField
                              control={form.control}
                              name="ticketPrice"
                              render={({ field }) => (
                                <FormControl>
                                  <Input
                                    placeholder="0"
                                    className="w-24 text-right font-bold text-green-700 border-2 border-green-200 bg-white hover:border-green-300 focus:border-green-400 transition-all duration-300"
                                    {...field}
                                  />
                                </FormControl>
                              )}
                            />
                            <span className="text-green-600 font-bold">SUI</span>
                          </div>
                        </div>

                        {/* Enhanced Require Approval */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <UserCheck className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-purple-700 text-lg">Require Approval</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="requireApproval"
                            render={({ field }) => (
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-violet-600"
                                />
                              </FormControl>
                            )}
                          />
                        </div>

                        {/* Enhanced Capacity */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-blue-700 text-lg">Capacity</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="capacity"
                            render={({ field }) => (
                              <FormControl>
                                <Input
                                  placeholder="Unlimited"
                                  className="w-32 text-right font-bold text-blue-700 border-2 border-blue-200 bg-white hover:border-blue-300 focus:border-blue-400 transition-all duration-300"
                                  {...field}
                                />
                              </FormControl>
                            )}
                          />
                        </div>

                        {/* Enhanced Category */}
                        <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <Tag className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-orange-700 text-lg">Category</span>
                          </div>
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-52 border-2 border-orange-200 bg-white hover:border-orange-300 focus:border-orange-400 transition-all duration-300">
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="technology">💻 Technology</SelectItem>
                                  <SelectItem value="art-design">🎨 Art & Design</SelectItem>
                                  <SelectItem value="music">🎵 Music</SelectItem>
                                  <SelectItem value="networking">🤝 Networking</SelectItem>
                                  <SelectItem value="gaming">🎮 Gaming</SelectItem>
                                  <SelectItem value="finance">💰 Finance</SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </div>
                      </div>

                      {/* Enhanced Create Event Button */}
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <Sparkles className="w-5 h-5 animate-pulse" />
                          <span>Create Amazing Event</span>
                          <Zap className="w-5 h-5 animate-pulse" />
                        </div>
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

