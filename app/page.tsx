'use client';

import { useState } from 'react';
import { games, categories } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* 搜索和分类过滤 */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Input
            type="search"
            placeholder="搜索游戏..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-96"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('')}
            >
              全部
            </Button>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* 游戏列表 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map(game => (
            <Card key={game.id} className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{game.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {game.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-lg font-bold">¥{game.price}</span>
                <span className="text-sm text-muted-foreground">
                  {format(new Date(game.releaseDate), 'yyyy-MM-dd')}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* 没有结果时显示提示 */}
        {filteredGames.length === 0 && (
          <div className="text-center text-muted-foreground">
            没有找到符合条件的游戏
          </div>
        )}
      </div>
    </main>
  );
} 